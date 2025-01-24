import { memo } from "react";
import Loading from "./loading";
import InputBox from "../common/input-box";
import { ModalFormType } from "../../types/global";

export const ModalForm = memo(({ editingUserId, handleEditUser, handleAddUser, form, setForm, loading }: ModalFormType) => {
    return <> <h2 className="text-lg font-semibold mb-4">
        {editingUserId ? 'Edit User' : 'Add New User'}
    </h2>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                editingUserId ? handleEditUser() : handleAddUser();
            }}
        >
            <div className="flex flex-col gap-4">
                {/* TODO: need to show suitable message */}
                <InputBox
                    placeholder="First Name"
                    value={form.first_name}
                    onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                />
                <InputBox
                    placeholder="Last Name"
                    value={form.last_name}
                    onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                />
                <InputBox
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

            </div>
            <button
                type="submit"
                className="bg-blue-500 w-full text-white px-6 py-3 rounded mt-8 text-sm rounded-xl hover:opacity-70 transition"
            >
                {loading ? <Loading /> : editingUserId ? 'Save Changes' : 'Add User'}
            </button>
        </form> </>
})