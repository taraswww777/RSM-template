import {Tab} from "@headlessui/react";
import {FC, ReactNode} from "react";

interface DetailPostProp {
    post: ReactNode,
    comments: ReactNode,
}

enum TABS {
    post = 'post',
    comments = 'comments'
}

export const DetailPost: FC<DetailPostProp> = ({post, comments}) => (
    <Tab.Group>
        <Tab.List>
            <Tab key={TABS.post}>{TABS.post}</Tab>
            <Tab key={TABS.comments}>{TABS.comments}</Tab>
        </Tab.List>
        <Tab.Panels>
            <Tab.Panel key={TABS.post}>{post}</Tab.Panel>
            <Tab.Panel key={TABS.comments}>{comments}</Tab.Panel>
        </Tab.Panels>
    </Tab.Group>
)
