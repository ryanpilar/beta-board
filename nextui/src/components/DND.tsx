"use client"

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers';
import { useState } from 'react';
import SortableLinks from '@/components/SortableLinks';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AddNewItem } from '@/components/AddNewItem';

interface Item {
  name: string;
  id: number;
}
interface ItemProps {
  name: string
  id: number
}
interface DNDProps {
  defaultItems: Item[]
  label: string
  setMainWindow: any
}

const DND: React.FC<DNDProps> = ({ defaultItems, label, setMainWindow }) => {

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [items, setItems] = useState<Item[]>(defaultItems);

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item.id === active.id);
        const newIndex = prevItems.findIndex((item) => item.id === over.id);

        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  }

  function handleDelete(idToDelete: number) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== idToDelete));
  }

  let idx = Date.now();

  function addNewItem(newItem: string) {
    setItems((prevItems) => [...prevItems, { name: newItem, id: idx }]);
  }

  return (
    <main className='flex justify-center px-2 mx-auto select-none'>
      <Card className='w-full md:max-w-lg'>
        <CardHeader className='space-y-1 '>
          <CardTitle className='text-2xl flex justify-between'>
            {label}
            <AddNewItem addNewItem={addNewItem} />
          </CardTitle>
          <CardDescription>List Popular web development frameworks</CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
          >
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
              {items.map((item, index) => (

                // <div className='cursor-pointer' onClick={() => {
                //   setMainWindow(index)
                // }}>
                  <SortableLinks key={item.id} id={item} onDelete={handleDelete} changeView={()=>setMainWindow(index+1)} />
                // </div>
              ))}
            </SortableContext>
          </DndContext>
        </CardContent>
      </Card>
    </main>
  );
};

export default DND;