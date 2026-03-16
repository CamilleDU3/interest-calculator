'client use';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    labelText: string;
};
//TODO: add a onBlur event, remove 0 firt digit ex: "0010000" -> "10000"
//TODO: change to type="text" for thousand-value separation (to include if implemented : strip space)
export default function Input({
    id,
    labelText,
    name,
    value,
    className,
    ...props
}: InputProps) {
    return (
        <div className="mb-5">
            <label htmlFor={id} className="block mx-5 font-bold">
                {labelText}
            </label>
            <input
                type="number"
                id={id}
                name={name ?? id + '-name'}
                value={value}
                className="bg-background text-center ${className || ''}"
                {...props}
            />
        </div>
    );
}
