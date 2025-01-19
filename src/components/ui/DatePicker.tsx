import React from "react";
import {
  DatePicker as AtlaskitDatePicker,
  DatePickerProps,
} from "@atlaskit/datetime-picker";

const toISODate = (date: string): string => new Date(date).toISOString();

const DatePicker = ({
  label,
  onChange,
  id,
  ...props
}: DatePickerProps & { label?: string }) => {
  return (
    <div className="w-4/5 max-w-80 mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <AtlaskitDatePicker
        {...props}
        id={id}
        dateFormat="YYYY-MM-DD"
        shouldShowCalendarButton
        onChange={(date) => {
          if (onChange) {
            onChange(date ? toISODate(date) : "");
          }
        }}
      />
    </div>
  );
};

export { DatePicker };
