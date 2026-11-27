import fs from "node:fs/promises";

const CID = process.env.GOOGLE_PLACES_CID;
const API_KEY = "YOUR_API_KEY";

async function getReviewsAndAvatars(): Promise<{ googleReviews: GoogleReview[], avatars: Promise<Response[]> }> {
  const response = await fetch(`https://api.toolzerhub.com/v1/google-maps/reviews?cid=${CID}`, {
    method: "GET",
    headers: {
      "x-api-key": API_KEY,
    }
  });

  if (!response.ok) {
    throw new Error(`Error fetching Google Reviews. Status: ${response.status}\nCID: ${CID}`);
  }

  const reviews: ToolzerResponse = await response.json()
  const avatar_urls = reviews.data.reviews.map((review: ToolzerReview) => review.author.avatar);
  const avatars = Promise.all(avatar_urls.map((url: string) => fetch(url, { method: "GET" })));
  const avatar_img_names = avatar_urls.map((urls: string) => urls.split('/').at(-1));
  const googleReviews = reviews.data.reviews.map((review: ToolzerReview, index: number): GoogleReview => {
    return {
      rating: review.rating,
      reviewText: review.text,
      name: review.author.name,
      relativeTime: review.relative_time,
      image: `src/assets/images/${avatar_img_names[index]}.png`,
    };
  });

  return { googleReviews, avatars };
}

async function writeReviewsAndAvatars(reviews: GoogleReview[], avatars: Promise<Response[]>) {
  const writeTasks = (await avatars).map(async (response: Response, index: number) => {
    if (!response.ok) {
      throw new Error(`Error fetching avatar from Google profile. Status: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return fs.writeFile(reviews[index].image, buffer);
  });
  writeTasks.push(fs.writeFile("src/assets/google-reviews.json", JSON.stringify(reviews, null, 2)))
  await Promise.all(writeTasks);
}

async function run() {
  const { googleReviews, avatars } = await getReviewsAndAvatars();
  await writeReviewsAndAvatars(googleReviews, avatars);
}

await run();

type ToolzerReview = {
  rating: number;
  text: string;
  relative_time: string;
  author: {
    name: string;
    avatar: string;
  };
};

type ToolzerData = {
  reviews: ToolzerReview[];
  count: number;
  next_cursor: string;
  has_more: boolean;
  requested_cid: string;
  usage_note: string;
};

type ToolzerResponseDetails = {
  reason: string;
  message: string;
};

type ToolzerResponse = {
  data: ToolzerData;
  details: ToolzerResponseDetails;
};

type GoogleReview = {
  name: string;
  image: string;
  rating: number;
  reviewText: string;
  relativeTime: string;
};
