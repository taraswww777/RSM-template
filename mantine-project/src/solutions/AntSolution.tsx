import React, {FC} from 'react';
import {Badge, Button, Card, Grid, Group, MantineProvider, Mark, Text} from '@mantine/core';
import {SolutionProps} from "./types";

export const AntSolution: FC<SolutionProps> = ({posts, loadPost, postDetail, loadComments, comments}) => (
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
)
