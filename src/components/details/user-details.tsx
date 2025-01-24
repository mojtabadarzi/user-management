import { DetailsRow } from './detail-row';
import { NotAssign } from '../common/not-assign';
import { UserListType } from '../../types/global';
import { useDetails } from '../../hooks/use-details';
import { MessageBox } from '../common/message-box';




const UserDetail = ({ userId }: { userId: number }) => {
    const { loading, user, avatar, clearStatus, msg, messageStatus } = useDetails(userId)

    return (
        <div className="flex flex-col justify-start w-full">
            <figure className="mt-4 grid place-items-center h-32 sm:h-64">
                {loading
                    ? <div className="animate-pulse bg-gray-200 w-32 h-32 sm:w-64 sm:h-64 rounded-full" />
                    : avatar ? <img src={avatar} className="rounded-full w-32 h-32 sm:w-64 sm:h-64" alt="avatar" />
                        : <NotAssign /> // TODO: default image
                }
            </figure>
            {user?.map((item: UserListType) => {
                const { label, value, border } = item || {}
                return <DetailsRow
                    key={label}
                    label={label}
                    value={value}
                    border={border}
                    loading={loading}
                />
            })}

            {!loading && msg && messageStatus && <MessageBox
                msg={msg}
                status={messageStatus}
                onClose={clearStatus}
            />}
        </div>
    );
};

export default UserDetail;
