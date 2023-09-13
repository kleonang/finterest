import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import utilStyles from '@/styles/utils.module.css';

/*
    The page where the user first enters after he logs in
*/
const Dashboard = () => {
    const { logOut } = useAuth();
    const router = useRouter();

    return (
        <ProtectedRoute>
            <Head>
                <title>Dashboard - Finterest</title>
                <meta
                    name="description"
                    content="Finterest dashboard"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto flex min-h-screen items-center py-2">
                <div className="mx-auto mt-24 overflow-y-hidden px-12 py-24 text-gray-600">

                    <section>
                        <h1 className={utilStyles.h1heading}>Finterest</h1>

                        <h2 className="mb-4 text-2xl font-semibold">
                            You are logged in!
                        </h2>

                        <p>
                            Read a finance <NextLink className={utilStyles.linkNormal} href="/articles/article-main">article</NextLink>
                        </p>
                    </section>

                    <section className={utilStyles.headingMd}>
                        <h4 className={utilStyles.h4heading}>Finterest Chats</h4>
                        <p>
                            <NextLink className={utilStyles.linkNormal} href="/chats/new-chat">Start a new chat!</NextLink>
                        </p>
                        <br />
                    </section>

                    <div className="mb-8 flex items-center justify-center">
                        <button
                            onClick={() => {
                                logOut();
                                router.push('/');
                            }}
                            className="rounded-md bg-green-600 px-10 py-3 text-white shadow-sm hover:bg-green-700"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default Dashboard;