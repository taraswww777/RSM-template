import React, {useEffect, useState} from 'react';
import {Badge, Button, Card, Grid, Group, MantineProvider, Mark, Text} from '@mantine/core';
import './App.css';
import {Comment, fetchPostById, fetchPostCommentsList, fetchPostList, Post} from "./resources/posts";

function App() {
    const [posts, setPosts] = useState<Post[]>([])
    const [postDetail, setPostDetail] = useState<Post>()
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        fetchPostList().then(setPosts)
    }, []);

    const loadPost = (postId: Post['id']) => {
        if (postId !== postDetail?.id) {
            setComments([]);
            fetchPostById(postId).then(setPostDetail)
        }
    }
    const loadComments = (postId: Comment['id']) => {
        if (postId !== postDetail?.id || comments.length === 0) {
            fetchPostCommentsList(postId).then(setComments)
        }
    }

    return (
        <MantineProvider>
            <Grid>
                <Grid.Col span={12}>
                    {posts.map(({id, title}) => (
                        <Button
                            size={"xs"}
                            variant={postDetail?.id === id ? 'filled' : 'subtle'}
                            compact
                            type={'button'}
                            key={id}
                            onClick={() => loadPost(id)}>
                            ID: {id}
                        </Button>
                    ))}
                </Grid.Col>
                <Grid.Col span={8}>
                    {postDetail?.id ? (
                        <div key={postDetail?.id}>
                            {postDetail?.body}
                            <Button onClick={() => loadComments(postDetail?.id)}>
                                see comment
                            </Button>

                            <div>
                                {comments.map(({id, name, body, email}) => (
                                    <Card key={id} shadow="sm" padding="lg" radius="md" withBorder>
                                        <Group position="apart" mt="md" mb="xs">
                                            <Text weight={500}>{name}</Text>
                                            <Badge color="pink" variant="light">
                                                {id}
                                            </Badge>
                                        </Group>
                                        <Text size="sm" color="dimmed">
                                            {body}
                                        </Text>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <Mark>empty postDetail</Mark>
                    )}
                </Grid.Col>
            </Grid>
        </MantineProvider>
    );
}

export default App;
