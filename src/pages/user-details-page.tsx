import { useParams, useNavigate } from 'react-router-dom';
import UserDetail from '../components/details/user-details';
import Layout from '../components/common/layout';

const UserDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    return (
        <Layout title="User Details"
            back={<button onClick={() => navigate(-1)} className="text-gray-900 hover:opacity-60 transition">
                Back
            </button>
            }>
            <div className="bg-white shadow rounded-3xl p-6 pt-2 pb-2 mt-6">
                {id ? <UserDetail userId={parseInt(id, 10)} /> : <p>User not found</p>}
            </div>
        </Layout>
    );
};

export default UserDetailPage;
