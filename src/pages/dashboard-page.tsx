import Modal from '../components/dashboard/modal';
import Layout from '../components/common/layout';
import { TableSkeleton } from '../components/dashboard/table-skeleton';
import NoResult from '../components/common/no-result';
import { NotAssign } from '../components/common/not-assign';
import { TABLE_HEADER_LIST } from '../constants/table-header-list';
import { TableHeader } from '../components/dashboard/table-header';
import { MessageBox } from '../components/common/message-box';
import { useDashboard } from '../hooks/use-dashboard';
import { Pagination } from '../components/dashboard/pagination';
import { ModalForm } from '../components/dashboard/modal-form';
import ActionButton from '../components/dashboard/action-button';
import AddUserButton from '../components/dashboard/add-user-button';

const DashboardPage = () => {
    const {
        page,
        totalPages,
        isModalOpen,
        editingUserId,
        form,
        messageStatus,
        msg,
        loading,
        users,
        onAddUserHandler,
        setForm,
        setIsModalOpen,
        clearStatus,
        showDetails,
        handleEditUser,
        handlePageChange,
        handleAddUser,
        onEditHandle,
        onDeleteHandle,
        onDetailsHandle
    } = useDashboard() // TODO: shrink to multi hooks

    return (
        <Layout title="User List" titleButton={<AddUserButton title="Add User" onClick={onAddUserHandler} />}>
            <section className="w-full overflow-x-scroll border-b mt-6">
                <table className="w-full border-collapse min-w-[900px] max-w-[1024px] w-full">
                    <thead>
                        <tr className="border-b border-gray-200">
                            {TABLE_HEADER_LIST.map((item) => <TableHeader label={item?.label} align={item?.align} />)}
                        </tr>
                    </thead>
                    {loading ? <TableSkeleton /> : <tbody>
                        {users?.map((user) => {
                            const { id, first_name, last_name, email } = user || {}
                            return <tr key={user.id} onClick={() => showDetails(user.id)}
                                className="cursor-pointer">
                                <td className="text-xs font-semibold text-gray-400 px-2 py-4 text-center rounded-tl-2xl rounded-bl-2xl">{id ?? <NotAssign />}</td>
                                <td className="text-xs sm:text-sm px-2 py-4 font-bold">{!first_name && !last_name ? <NotAssign /> : `${first_name} ${last_name}`}</td>
                                <td className="text-xs px-2 py-4 text-left text-gray-400 font-semibold">{email ?? <NotAssign />}</td>
                                <td className="px-4 py-4 text-center flex gap-2 justify-center items-center">
                                    <ActionButton
                                        title='Edit'
                                        classname="hover:border-blue-500 hover:bg-white hover:text-blue-500"
                                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onEditHandle(e, id, first_name, last_name, email)}
                                    />
                                    <ActionButton
                                        title="Delete"
                                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onDeleteHandle(e, id)}
                                        classname="bg-rose-600 hover:border-rose-600 hover:bg-white hover:text-rose-600"
                                    />
                                    <ActionButton
                                        title="Details"
                                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onDetailsHandle(e, id)}
                                        classname="bg-transparent !text-blue-500 border-transparent hover:border-blue-500"
                                    />
                                </td>
                            </tr>
                        })}
                    </tbody>}
                </table>
                {!loading && (!users || users.length === 0) && <NoResult />}
            </section>
            <Pagination page={page} totalPages={totalPages} handlePageChange={handlePageChange} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalForm
                    editingUserId={editingUserId}
                    handleEditUser={handleEditUser}
                    handleAddUser={handleAddUser}
                    form={form}
                    setForm={setForm}
                    loading={loading}
                />
            </Modal>
            {msg && messageStatus && <MessageBox msg={msg} onClose={clearStatus} status={messageStatus} />}
        </Layout>
    );
};

export default DashboardPage;