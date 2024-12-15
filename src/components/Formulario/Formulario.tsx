import {
  Button,
  createListCollection,
  SelectRoot,
  SelectValueText,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Box,
  Input,
  Textarea,
  Center,
} from "@chakra-ui/react";
import { Field } from "../ui/field";

import { useFormulario } from "@/hooks/useFormulario";
import { Controller } from "react-hook-form";
import { Property, PropertyData } from "@/models";
import { useNavigate } from "react-router-dom";

interface Props {
  propertyUpdate: Property | undefined;
}
const Formulario = ({ propertyUpdate }: Props) => {
  const navigate = useNavigate();
  const { control, handleSubmit, errors, onCreate, onUpdate } =
    useFormulario(propertyUpdate);
  const status = createListCollection({
    items: [
      { label: "For Sale", value: "sale" },
      { label: "For Rent", value: "rent" },
    ],
  });

  const types = createListCollection({
    items: [
      { label: "House", value: "house" },
      { label: "Apartment", value: "apartment" },
      { label: "Land", value: "land" },
      { label: "Office", value: "office" },
    ],
  });

  const onSubmit = async (formData: PropertyData) => {
    if (propertyUpdate === undefined) {
      const res = await onCreate(formData);
      if (res) {
        navigate("/");
      }
    } else {
      const res = await onUpdate(formData, propertyUpdate!);
      if (res) {
        navigate("/");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Box w={"full"}>
        <Field
          label="Title"
          invalid={!!errors.title}
          errorText={errors.title?.message}
        >
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <Input
                bg={"whiteAlpha.600"}
                {...field}
                defaultValue={propertyUpdate?.title || ""}
                placeholder="Enter title"
              />
            )}
          />
        </Field>

        <Field
          label="Address"
          invalid={!!errors.address}
          errorText={errors.address?.message}
        >
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <Input
                bg={"whiteAlpha.600"}
                {...field}
                defaultValue={propertyUpdate?.address || ""}
                placeholder="Enter address"
              />
            )}
          />
        </Field>

        <Field
          label="Price"
          invalid={!!errors.price}
          errorText={errors.price?.message}
        >
          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <Input
                bg={"whiteAlpha.600"}
                type="number"
                {...field}
                defaultValue={propertyUpdate?.price || ""}
                placeholder="Enter price"
              />
            )}
          />
        </Field>

        <Field
          label="Area"
          invalid={!!errors.area}
          errorText={errors.area?.message}
        >
          <Controller
            control={control}
            name="area"
            render={({ field }) => (
              <Input
                bg={"whiteAlpha.600"}
                type="number"
                {...field}
                defaultValue={propertyUpdate?.area || ""}
                placeholder="Enter area"
              />
            )}
          />
        </Field>

        <Field
          label="Location"
          invalid={!!errors.location?.lat || !!errors.location?.lng}
          errorText={
            errors.location?.lat?.message || errors.location?.lng?.message
          }
        >
          <Controller
            control={control}
            name="location"
            render={({ field }) => (
              <>
                <Input
                  bg={"whiteAlpha.600"}
                  type="number"
                  defaultValue={propertyUpdate?.location?.lat || ""}
                  onChange={(e) =>
                    field.onChange({
                      ...field.value,
                      lat: Number(e.target.value),
                    })
                  }
                  placeholder="Latitude"
                />
                <Input
                  bg={"whiteAlpha.600"}
                  type="number"
                  defaultValue={propertyUpdate?.location?.lng || ""}
                  onChange={(e) =>
                    field.onChange({
                      ...field.value,
                      lng: Number(e.target.value),
                    })
                  }
                  placeholder="Longitude"
                />
              </>
            )}
          />
        </Field>

        <Field
          label="Owner Name"
          invalid={!!errors.owner?.name}
          errorText={errors.owner?.name?.message}
        >
          <Controller
            control={control}
            name="owner.name"
            render={({ field }) => (
              <Input
                bg={"whiteAlpha.600"}
                {...field}
                defaultValue={propertyUpdate?.owner?.name || ""}
                placeholder="Enter owner name"
              />
            )}
          />
        </Field>

        <Field
          label="Owner Contact"
          invalid={!!errors.owner?.contact}
          errorText={errors.owner?.contact?.message}
        >
          <Controller
            control={control}
            name="owner.contact"
            render={({ field }) => (
              <Input
                bg={"whiteAlpha.600"}
                {...field}
                defaultValue={propertyUpdate?.owner?.contact || ""}
                placeholder="Enter owner contact"
              />
            )}
          />
        </Field>

        <Field
          label="Type"
          invalid={!!errors.type}
          errorText={errors.type?.message}
        >
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <SelectRoot
                value={[field.value || propertyUpdate?.type || ""]}
                onValueChange={(values) => field.onChange(values.value[0])}
                onInteractOutside={field.onBlur}
                collection={types}
                color={"black"}
                bg={"white"}
              >
                <SelectTrigger bg={"white"}>
                  <SelectValueText placeholder="Choose a type" />
                </SelectTrigger>
                <SelectContent bg={"white"}>
                  {types.items.map((item) => (
                    <SelectItem
                      _hover={{
                        bg: "gray.300",
                      }}
                      _selected={{
                        bg: "gray.200",
                      }}
                      key={item.value}
                      item={item.value}
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
            )}
          />
        </Field>

        <Field
          label="Description"
          invalid={!!errors.description}
          errorText={errors.description?.message}
        >
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <Textarea
                bg={"white"}
                {...field}
                defaultValue={propertyUpdate?.description || ""}
                placeholder="Enter description"
                resize="none"
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "auto";
                  target.style.height = `${target.scrollHeight}px`;
                }}
              />
            )}
          />
        </Field>

        <Field
          label="Status"
          invalid={!!errors.status}
          errorText={errors.status?.message}
        >
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <SelectRoot
                value={[field.value || propertyUpdate?.status || ""]}
                onValueChange={(values) => field.onChange(values.value[0])}
                onInteractOutside={field.onBlur}
                collection={status}
              >
                <SelectTrigger bg={"white"}>
                  <SelectValueText placeholder="Choose a status" />
                </SelectTrigger>
                <SelectContent bg="white">
                  {status.items.map((item) => (
                    <SelectItem
                      _hover={{
                        bg: "gray.300",
                      }}
                      _selected={{
                        bg: "gray.200",
                      }}
                      key={item.value}
                      item={item.value}
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
            )}
          />
        </Field>

        <Center>
          <Button mt={4} p={"1rem"} type="submit">
            Submit
          </Button>
        </Center>
      </Box>
    </form>
  );
};

export default Formulario;
