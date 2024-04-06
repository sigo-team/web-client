'use client';

import React, {useState} from 'react';
import style from "./style.module.css";
import {Button, Checkbox, FileButton, Group, NumberInput, Pill, Stack} from "@mantine/core";
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
                                    justify="space-between"
                                >
                                    {"Выбрать пакет"}
                                </Button>
                            }
                        </FileButton>
                    )}
                    <Group w="100%" align="left">
                        <Stack flex="1">
                            <NumberInput
                                defaultValue={365 * 24 * 60 * 60}
                                label="Время раунда"
                                min={0}
                                max={365 * 24 * 60 * 60}
                                classNames={{
                                    label: style.number_input__label,
                                    input: style.number_input__input
                                }}
                                rightSection={<></>}
                                rightSectionWidth="0"
                                suffix="s"
                            />
                            <NumberInput
                                defaultValue={365 * 24 * 60 * 60}
                                label="Время вопроса"
                                min={0}
                                max={365 * 24 * 60 * 60}
                                classNames={{
                                    label: style.number_input__label,
                                    input: style.number_input__input
                                }}
                                rightSection={<></>}
                                rightSectionWidth="0"
                                suffix="s"
                            />
                            <NumberInput
                                defaultValue={30}
                                label="Время на размышление в финале"
                                min={0}
                                max={365 * 24 * 60 * 60}
                                classNames={{
                                    label: style.number_input__label,
                                    input: style.number_input__input
                                }}
                                rightSection={<></>}
                                rightSectionWidth="0"
                                suffix="s"
                            />
                        </Stack>
                        <Stack flex="1">
                            <NumberInput
                                defaultValue={15}
                                label="Время на размышление после нажатия кнопки"
                                min={0}
                                max={365 * 24 * 60 * 60}
                                classNames={{
                                    label: style.number_input__label,
                                    input: style.number_input__input
                                }}
                                rightSection={<></>}
                                rightSectionWidth="0"
                                suffix="s"
                            />
                            <NumberInput
                                defaultValue={30}
                                label="Время на рызмышление над спецвопросом"
                                min={0}
                                max={365 * 24 * 60 * 60}
                                classNames={{
                                    label: style.number_input__label,
                                    input: style.number_input__input
                                }}
                                rightSection={<></>}
                                rightSectionWidth="0"
                                suffix="s"
                            />
                        </Stack>
                    </Group>
                    <Group>
                        <Stack>
                            <Checkbox
                                defaultChecked
                                label="Звершать вопрос при правильном ответе"
                                classNames={{label: style.checkbox__label, inner: style.checkbox__inner}}
                            />
                            <Checkbox
                                defaultChecked
                                label="Игра с фальстартами"
                                classNames={{label: style.checkbox__label, inner: style.checkbox__inner}}
                            />
                            <Checkbox
                                defaultChecked
                                label="Мультимедиа с фальстартами"
                                classNames={{label: style.checkbox__label, inner: style.checkbox__inner}}
                            />
                            <Checkbox
                                defaultChecked
                                label="Играть спецовпросы"
                                classNames={{label: style.checkbox__label, inner: style.checkbox__inner}}
                            />
                        </Stack>
                        <Stack>
                            <Checkbox
                                defaultChecked
                                label="Откатывать статистику при шаге назад"
                                classNames={{label: style.checkbox__label, inner: style.checkbox__inner}}
                            />
                            <Checkbox
                                label="Автоматическое ведение игры (без ведущего)"
                                classNames={{label: style.checkbox__label, inner: style.checkbox__inner}}
                            />
                            <Checkbox
                                defaultChecked
                                label="Снимать очки за неверный ответ"
                                classNames={{label: style.checkbox__label, inner: style.checkbox__inner}}
                            />
                            <Checkbox
                                label="Показывать огроков, проигравших кнопку"
                                classNames={{label: style.checkbox__label, inner: style.checkbox__inner}}
                            />
                        </Stack>
                    </Group>

                    <Button disabled={!file} classNames={{root: style.button_submit}}>
                        Создать комнату
                    </Button>
                </Stack>
            </div>
        </div>
    );
};

export {NewRoom};