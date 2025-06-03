export default function Notice({ notice, date }: { notice: string; date: string }) {
  return (
    <div className="bg-gray-700 px-5 py-2">
      <div className="flex items-center gap-2">
        <span className="rounded-full border border-green-500 px-3 py-1 text-xs text-green-500">
          공지
        </span>
        <p className="flex-1 text-sm font-bold text-white">{notice}</p>
        <span className="text-xs text-gray-200">{date}</span>
      </div>
    </div>
  );
}
