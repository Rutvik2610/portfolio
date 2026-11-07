// Email confirmed by Rutvik. Profile links extracted from the supplied resume.
export const socials = {
  email: "rutvikpurohit10@gmail.com",
  linkedin: "https://linkedin.com/in/rutvik-purohit-8360b61b5",
  github: "https://github.com/Rutvik2610",
};
export function validExternal(url: string) {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return false;
  }
}
