import Link from "next/link";

export default function Folder1() {
  return (
    <>
      <h1>Folder1 page</h1>
      <div>
        <Link href="/folder1/folder2">Folder2</Link>
      </div>
    </>
  );
}