import SuccessMessage from "./_component/SuccessMessage";
import { createNews } from "../../api/news/action";

export default function CreateNewsFormPage() {
  return (
    <>
      <form
        action={createNews}
        className="space-y-4"
      >
        <input
          type="text"
          name="caption"
          placeholder="Caption"
          className="border px-3 py-2 block w-full"
          required
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          className="block w-full"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create News
        </button>
      </form>

      <SuccessMessage />
    </>
  );
}
