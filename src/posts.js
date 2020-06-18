import React from 'react'
import {
    Edit,
    SimpleForm,
    List,
    Datagrid,
    EditButton,
    TextField,
    ReferenceField,
    SelectInput,
    ReferenceInput,
    TextInput,
    Create
} from 'react-admin'

export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
)

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
}

export const PostEdit = props => (
    <Edit {...props} title={<PostTitle />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);