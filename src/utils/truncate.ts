export const truncate = (text: string = "", maxLength: number, suffix = "...") => {
    try {
        if (maxLength < 0) maxLength = Math.abs(maxLength)
        if (text.length <= maxLength) {
            return text;
        }

        const trimmedLength = maxLength - suffix.length;
        if (trimmedLength <= 0) {
            return suffix.slice(0, maxLength);
        }

        return text.slice(0, trimmedLength) + suffix;
    } catch {
        return ""
    }
}