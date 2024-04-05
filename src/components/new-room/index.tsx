'use client';

import React, {useState} from 'react';
import style from "./style.module.css";
import {Button, Checkbox, FileButton, Pill, Stack} from "@mantine/core";
import {IconUpload} from "@tabler/icons-react";


const NewRoom = () => {
    const [file, setFile] = useState<File | null>(null);

    const clearFile = () => {
        setFile(null);
    };

    return (
        <div className={style.widget__container}>
            <div className={style.widget}>
                <Stack align="center">
                    {file ? (
                        <Pill withRemoveButton classNames={{
                            root: style.pill__root,
                            label: style.pill__label,
                            remove: style.pill__remove
                        }}
                              onRemove={clearFile}>
                                <span className={style.pill__label__content}>
                                    {file.name}
                                </span>
                        </Pill>
                    ) : (
                        <FileButton accept=".zip,.rar,.7zip" onChange={setFile}>
                            {(props) =>
                                <Button
                                    {...props}
                                    rightSection={<IconUpload/>}
                                    classNames={{root: style.button_upload__root}}
                                >
                                    {"Загрузить пакет"}
                                </Button>
                            }
                        </FileButton>
                    )}
                    <Stack>
                        <Checkbox
                            defaultChecked
                            label="Кот в мешке"
                            classNames={{label: style.checkbox__label, inner: style.checkbox__inner}}
                        />
                        <Checkbox
                            defaultChecked
                            label="Вопрос-аукцион"
                            classNames={{label: style.checkbox__label, inner: style.checkbox__inner}}
                        />
                    </Stack>
                    <Button disabled={!file}>
                        Создать комнату
                    </Button>
                </Stack>
            </div>
        </div>
    );
};

export {NewRoom};