export const buttonSizes = {
  sm: "px-4 py-2.5 text-[15px]",
  lg: "px-6 py-4 text-lg",
} as const;

/** The rounded white card ("tile") the whole page is built from. */
export const tile = "rounded-[28px] bg-white";

/** A tile that lifts slightly under the mouse. */
export const lift =
  "transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(22_38_27/0.10)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";
