'use client';
import {ActionIcon, Button, Group, Pagination, ScrollArea, Stack, Table, TextInput} from "@mantine/core";
import style from "./style.module.css";
import {IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight, IconSearch} from "@tabler/icons-react";
import React, {useState} from "react";
import clsx from "clsx";


const rooms = [
    {
        id: 97135, package: "solyanka_10", type: "public", players: 19, max_players: 100
    },
    {
        id: 63428, package: "", type: "private", players: 4, max_players: 100
    },
    {
        id: 32899, package: "solyanka_mega_super_long_named_package", type: "public", players: 23, max_players: 100
    },

];

const Menu = () => {
    const SayHelloWorld = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        console.log("Hello World")
    }

    const [chosen, setChosen] = useState(0);
    const [activePage, setPage] = useState(1);


    const rows = rooms.map((room) => (
        <Table.Tr
            key={room.id}
            className={clsx({
                [style.table__tbody__tr]: true,
                [style.table__tbody__tr_chosen]: chosen === room.id
            })}
            aria-checked={room.id === chosen}
            onClick={() => {
                setChosen(room.id)
            }}
            onDoubleClick={() => console.log("double clicked", room.id)}
        >
            <Table.Td>#{room.id}</Table.Td>
            <Table.Td>{room.package}</Table.Td>
            <Table.Td>{room.type}</Table.Td>
            <Table.Td>{room.players}/{room.max_players}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div className={style.menu__container}>
            <Group gap="10px">
                <Stack className={style.table__container}>
                    <ScrollArea h="350" w="600">
                        <Table withRowBorders={false} className={style.table__root}>
                            <Table.Thead>
                                <Table.Tr className={style.table__thead__tr}>
                                    <Table.Th>ID</Table.Th>
                                    <Table.Th>Пакет</Table.Th>
                                    <Table.Th>Тип</Table.Th>
                                    <Table.Th>Игроков</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>{rows}</Table.Tbody>
                        </Table>
                    </ScrollArea>
                    <Group justify="center">
                        <Pagination.Root
                            total={100}
                            value={activePage}
                            onChange={setPage}
                            classNames={{control: style.pagination__control, dots: style.pagination__dots}}

                        >
                            <Group gap={5} justify="center">
                                <Pagination.First icon={() => <IconChevronsLeft strokeWidth="2px"/>}/>
                                <Pagination.Previous icon={() => <IconChevronLeft strokeWidth="2px"/>}/>
                                <Pagination.Items/>
                                <Pagination.Next icon={() => <IconChevronRight strokeWidth="2px"/>}/>
                                <Pagination.Last icon={() => <IconChevronsRight strokeWidth="2px"/>}/>
                            </Group>
                        </Pagination.Root>
                    </Group>
                </Stack>
                <Stack justify="space-between" h="412px">
                    <TextInput fw="500"
                               classNames={{
                                   wrapper: style.text_input__wrapper,
                                   input: style.text_input__input
                               }}
                               rightSection={
                                   <ActionIcon variant="transparent" onClick={SayHelloWorld}>
                                       <IconSearch className={style.sidebar__search_icon}/>
                                   </ActionIcon>
                               }/>
                    <Stack gap="7px">
                        <Button component="a" href="/new" fw="700" className={style.button}>
                            Создать комнату
                        </Button>
                        <Button color="yellow.6" fw="700" className={style.button} disabled={chosen === 0}>
                            Наблюдать
                        </Button>
                        <Button color="orange.6" fw="700" className={style.button} disabled={chosen === 0}>
                            Присоединиться
                        </Button>
                    </Stack>
                </Stack>
            </Group>
        </div>
    )
}

export {Menu};