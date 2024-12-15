import { Property } from '@/types';
import { Badge } from '@chakra-ui/react';


interface PropertyBadgeProps {
  status: Property['status'];
}

export const PropertyBadge = ({ status }: PropertyBadgeProps) => (
  <Badge
    colorScheme={status === 'rent' ? 'blue' : 'green'}
    px="3"
    py="1"
    borderRadius="full"
  >
    {status}
  </Badge>
);