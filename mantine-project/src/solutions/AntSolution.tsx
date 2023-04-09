import React, {FC} from 'react';
import {SolutionProps} from "./types";
import {Layout, Button, Card, Badge, Empty} from "antd";
import {DetailPost} from "../components/DetailPost";

export const AntSolution: FC<SolutionProps> = ({posts, loadPost, postDetail, loadComments, comments}) => (
    <Layout>
        <Layout.Sider theme={"light"}>
            {posts.map(({id, title}) => (
                <Button
                    type={postDetail?.id === id ? 'primary' : 'ghost'}
                    size={"small"}
                    shape="round"
                    htmlType={'button'}
                    key={id}
                    onClick={() => loadPost(id)}>
                    ID: {id}
                </Button>
            ))}
        </Layout.Sider>
        <Layout.Content>
            {postDetail?.id ? (
                <DetailPost
                    key={postDetail?.id}
                    post={<>
                        {postDetail?.body}
                        <Button onClick={() => loadComments(postDetail?.id)}>
                            see comment
                        </Button>
                    </>}
                    comments={
                        <>
                            {comments.map(({id, name, body, email}) => (
                                <Badge.Ribbon
                                    key={id}
                                    text={id}
                                    color="red">
                                    <Card title={name} size="small">
                                        {body}
                                    </Card>
                                </Badge.Ribbon>
                            ))}
                        </>
                    }
                />
            ) : (
                <Empty/>
            )}
        </Layout.Content>
    </Layout>
)
