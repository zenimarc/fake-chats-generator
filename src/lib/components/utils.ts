import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * This function is used to merge tailwind classes with other classes.
 * it's a wrapper around clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
