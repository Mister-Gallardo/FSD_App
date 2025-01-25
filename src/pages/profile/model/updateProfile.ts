export interface UpdateProfileData {
  name?: string;
  email?: string;
  password?: string;
}

export const updateProfile = async (data: UpdateProfileData): Promise<void> => {
  const response = await fetch("/api/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update profile");
  }
};
