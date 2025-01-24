
const Skeleton = () => (
    <tr>
        <td className="px-2 py-6">
            <div className="animate-pulse bg-gray-200 h-3 w-10 mx-auto rounded" />
        </td>
        <td className="px-2 py-6">
            <div className="animate-pulse bg-gray-200 h-3 w-24 rounded" />
        </td>
        <td className="px-2 py-6">
            <div className="animate-pulse bg-gray-200 h-3 w-24 rounded" />
        </td>
        <td className="px-2 py-6">
            <div className="animate-pulse bg-gray-200 h-3 w-24 rounded" />
        </td>
    </tr>
);

export const TableSkeleton = () => (
    <tbody>
        {Array.from({ length: 6 }, (_, index) => (
            <Skeleton key={index} />
        ))}
    </tbody>
);
