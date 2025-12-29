'use client';

import * as SelectPrimitive from '@radix-ui/react-select';

import { SelectContent } from './SelectContent';
import { SelectItem } from './SelectItem';
import { SelectLabel } from './SelectLabel';
import { SelectScrollDownButton } from './SelectScrollDownButton';
import { SelectScrollUpButton } from './SelectScrollUpButton';
import { SelectSeparator } from './SelectSeparator';
import { SelectTrigger } from './SelectTrigger';
import { SelectValue } from './SelectValue';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
};
