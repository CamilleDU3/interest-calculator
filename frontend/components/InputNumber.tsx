'client use';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    labelText: string;
};
//TODO: add a onBlur event, remove 0 firt digit ex: "0010000" -> "10000"
//TODO: change to type="text" for thousand-value separation (to include if implemented : strip space)
export default function InputNumber({
    id,
    labelText,
    name,
    value,
    className,
    ...props
}: InputProps) {
    return (
        <div className="mb-6">
            <label
                htmlFor={id}
                className="block mx-5 font-bold text-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]"
            >
                {labelText}
            </label>
            <input
                type="number"
                id={id}
                name={name ?? id + '-name'}
                value={value}
                className="bg-background text-center border border-gray-300 rounded px-4 py-1 shadow ${className || ''}"
                {...props}
            />
        </div>
    );
}
