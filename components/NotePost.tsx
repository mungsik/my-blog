import Link from "next/link";

const NotePost = ({ date, title, des, slug }) => {
  return (
    <Link href={`/note/${slug}`} passHref>
      <a className="w-full my-7 hover:-translate-x-1.5">
        <div className="text-xs font-medium text-gray-400">{date}</div>
        <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>{des}</div>
      </a>
    </Link>
  );
};

export default NotePost;
