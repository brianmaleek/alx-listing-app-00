export interface CardProps {
    title: string;
    city: string;
    checkInType: "self" | "host" | "other";
    rescheduleType: "flexible" | "moderate" | "strict" | "other";
    images: string;
    price: number;
    rating: number;
}

export interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
}
