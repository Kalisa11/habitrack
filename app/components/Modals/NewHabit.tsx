import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Plus } from "lucide-react";
import { DatePicker } from "../DatePicker";
import Categories from "../Dropdowns/Categories";

export function NewHabit() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="text-white mr-1" />
          New Habit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Habit</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-4 py-4">
          <div className="col-span-2 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-left uppercase text-gray-500 col-span-2 text-base"
            >
              Name
            </Label>
            <Input id="name" type="text" className="col-span-3" />
          </div>
          <div className="col-span-2 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-left uppercase text-gray-500 col-span-2 text-base"
            >
              Description
            </Label>
            <Input id="description" type="text" className="col-span-3" />
          </div>
          <div className="col-span-2 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-left uppercase text-gray-500 col-span-2 text-base"
            >
              Start Date
            </Label>
            <DatePicker />
          </div>
          <div className="col-span-2 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-left uppercase text-gray-500 col-span-2 text-base"
            >
              End Date
            </Label>
            <DatePicker />
          </div>
          <div className="col-span-4">
            <Label
              htmlFor="reminder"
              className="uppercase text-base text-gray-500 text-left"
            >
              Goal
            </Label>
            <div className="flex gap-2">
              <Input
                id="reminder"
                type="number"
                className="col-span-1"
                placeholder="1"
              />
              <Input
                id="frequency"
                type="text"
                className="col-span-1"
                placeholder="Times"
              />
              <Input
                id="repeat"
                type="text"
                className="col-span-1"
                placeholder="Daily"
              />
              <Input
                id="repeat"
                type="text"
                className="col-span-1"
                placeholder="Repeat"
              />
            </div>
          </div>
          <div className="col-span-3">
            <Label className="uppercase text-base text-gray-500 text-left">
              Category
            </Label>
            <Categories />
          </div>
        </div>
        <DialogFooter>
          <DialogTrigger asChild={false}>
            <Button variant="destructive">Cancel</Button>
          </DialogTrigger>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
