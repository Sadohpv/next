import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "@/styles/AppPage.module.scss";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import PostCard from "@/components/Post/PostCard";
const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <div className={cx("content")}>
          <PostCard id={1} />
          <PostCard id={2} />

          <PostCard id={3} />

          <PostCard id={4} />
        </div>
      </div>
    </div>
  );
}

{
  /* <Layout>
  <Template>
      <ErrorBoundary fallback={<Error />  }> // Error Page (error.tsx)
        <Suspense fallback={<Loading />}> // Loading Page (loading.tsx)
          <ErrorBoundary fallback={<NotFound />  }> // Notfound Page (not-found.tsx)
            <Page />
          </ErrorBoundary>
        </Suspense>
      </ErrorBoundary>
  </Template>
</Layout> */
}
