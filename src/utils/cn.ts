export default function cn(...clasess: any) {
    return clasess.filter(Boolean).join(" ")
}