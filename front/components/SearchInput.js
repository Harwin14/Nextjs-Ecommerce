import Input from "./Input";


export default function SearchInput({ value, onChange }) {
  return (
    <Input
    type="text"
    placeholder="Search..."
    value={value}
    onChange={onChange}
  />
  )
}
