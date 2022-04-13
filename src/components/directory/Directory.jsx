import MenuItem from "../menu-item/Menu-item";
import { DirectoryContainer } from "./Directory.style";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <MenuItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
