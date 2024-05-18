import React from "react";
import AllPost from "@/app/components/AllPost";
import PostTable from "@/app/components/PostTable";

const Posts = async () => {
  const data = await AllPost();

  if (!data?.data) {
    return <p>No posts.</p>;
  }

  const posts = data.data;

  return (
    <div className="p-5">
      <div>
        {posts && (
          <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full p-4 h-full">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>title</th>
                    <th className="hidden lg:block">lead</th>
                    <th>edit</th>
                    <th>delete</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((Post, _index) => (
                    <PostTable id={_index} key={_index} post={Post} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
