// Leave missing values empty. Never generate guessed profile URLs.
export const socials = { email:'', linkedin:'', github:'' };
export function validExternal(url:string) { try { return new URL(url).protocol === 'https:'; } catch { return false; } }
