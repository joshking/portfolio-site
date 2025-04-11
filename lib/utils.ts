// Replace the clsx-dependent utility with a simpler version
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}
