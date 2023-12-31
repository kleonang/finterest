export default function LoadingText() {
    return (
        <div role="status" className="max-w-sm animate-pulse">
            <div className="h-3 bg-stone-200 rounded-full dark:bg-stone-700 w-48 mb-6"></div>
            <div className="h-2 bg-stone-200 rounded-full dark:bg-stone-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-stone-200 rounded-full dark:bg-stone-700 mb-2.5"></div>
            <div className="h-2 bg-stone-200 rounded-full dark:bg-stone-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}