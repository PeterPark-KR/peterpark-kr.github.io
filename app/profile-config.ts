type Portrait = { src: string; alt: string };

export const profileConfig: {
  email: string;
  linkedin: string;
  portrait: Portrait | null;
} = {
  email: "pparkk@my.yorku.ca",
  linkedin: "https://www.linkedin.com/in/hyeonjun-park-a50296322/",
  // Add a user-supplied image to public/ and set { src: "/portrait-87f7d2e1.jpg", alt: "Hyeonjun Park" }.
  portrait: { src: "/portrait-87f7d2e1.jpg", alt: "Hyeonjun Park" },
};
