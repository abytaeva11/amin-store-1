import { Container, Grid, Modal, Paper } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { useCreateProductMutation, useUpdateProductMutation } from "src/store";
import { notify } from "src/utils";
import {
  CustomDropzone,
  CustomInputText,
  ButtonGroup,
  CustomInputNumber,
  CustomSwitch,
  TextEditor,
  CustomSelect,
} from "src/components";
import { MIME_TYPES } from "@mantine/dropzone";
import { productCateogies } from "src/constants";
import { convertToBase64 } from "src/utils/content-functions";

type Props = {
  product?: ProductType;
};

export const ProductForm = ({ product }: Props) => {
  const navigate = useNavigate();

  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const [opened, { close, open }] = useDisclosure(false);

  const form = useForm<ProductFormType>({
    initialValues: {
      title: product?.title || "",
      sub_title: product?.sub_title || "",
      description: product?.description || "",
      price: product?.price || "",
      brand: product?.brand || "",
      model: product?.model || "",
      category: product?.category || "",
      img: null,
      year: product?.year || 2022,
      powerScale: product?.powerScale || 10,
      importance: product?.importance || 1,
      sale: product?.sale || "",
      active: product?.active || true,
      date: "2023-02-03",
    },
  });

  const handleSubmit = async ({ img, ...values }: ProductFormType) => {
    const convertedImage = await convertToBase64(img[0]);
    if (product) {
      try {
        await updateProduct({
          id: product.id,
          body: { img: convertedImage, ...values },
        }).unwrap();
        notify(true, "Обновлено");
        navigate(-1);
      } catch {
        notify(false);
      }
    } else {
      try {
        await createProduct({ img: convertedImage, ...values }).unwrap();
        notify(true, "Сохранено");
        form.reset();
        navigate(-1);
      } catch {
        notify(false);
      }
    }
  };

  return (
    <Container size="xl">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Paper bg="rgba(33, 41, 54, 0.7)" shadow="sm" p="xl">
          <Grid justify="space-between">
            <Grid.Col span={12}>
              <CustomSwitch
                {...form.getInputProps("active")}
                label={"Активный"}
                formData={form.values.active}
              />
            </Grid.Col>
            <Grid.Col mb={20} span={8}>
              <CustomInputText
                {...form.getInputProps("title")}
                label={"Название"}
                required
                error={form.errors.title}
                formData={form.values.title}
              />
              <CustomInputText
                {...form.getInputProps("sub_title")}
                label={"Под заголовок"}
                required
                error={form.errors.sub_title}
                formData={form.values.sub_title}
              />
              <CustomInputText
                {...form.getInputProps("price")}
                label={"Цена товара"}
                error={form.errors.price}
                formData={form.values.price}
              />
              <Grid gutter={10}>
                <Grid.Col span={4}>
                  <CustomInputText
                    {...form.getInputProps("brand")}
                    label={"Бренд"}
                    error={form.errors.brand}
                    formData={form.values.brand}
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <CustomInputText
                    {...form.getInputProps("model")}
                    label={"Модель"}
                    error={form.errors.model}
                    formData={form.values.model}
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <CustomSelect
                    {...form.getInputProps("category")}
                    placeholder="Категория"
                    data={productCateogies}
                    error={form.errors.category}
                    formData={form.values.category}
                  />
                </Grid.Col>
                <Grid.Col span={3}>
                  <CustomInputNumber
                    {...form.getInputProps("year")}
                    label={"Год выпуска продукта"}
                    error={form.errors.year}
                    formData={form.values.year}
                  />
                </Grid.Col>
                <Grid.Col span={3}>
                  <CustomInputText
                    {...form.getInputProps("powerScale")}
                    label={"Мощность по 4 бальной школе"}
                    max={4}
                    min={1}
                    error={form.errors.powerScale}
                    formData={form.values.powerScale}
                  />
                </Grid.Col>
                <Grid.Col span={3}>
                  <CustomInputText
                    {...form.getInputProps("sale")}
                    label={"Акция"}
                    error={form.errors.sale}
                    formData={form.values.sale}
                  />
                </Grid.Col>
                <Grid.Col span={3}>
                  <CustomInputNumber
                    {...form.getInputProps("importance")}
                    label={"Важность по 20 бальной шкале"}
                    max={20}
                    min={1}
                    error={form.errors.importance}
                    formData={form.values.importance}
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={3}>
              <CustomDropzone
                label={"Фотография"}
                error={form.errors.img}
                {...form.getInputProps("img")}
                accept={[MIME_TYPES.jpeg, MIME_TYPES.png, MIME_TYPES.webp]}
              />
            </Grid.Col>
            <Grid.Col
              bg="rgba(255,255,255,1)"
              style={{ borderRadius: "10px" }}
              span={12}
            >
              <TextEditor
                label="Описание товара"
                required
                error={form.errors.description}
                formData={form.values.description}
                {...form.getInputProps("description")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <ButtonGroup onClickCancel={() => navigate(-1)} type="submit" />
            </Grid.Col>
          </Grid>
        </Paper>
      </form>
      <Modal
        opened={opened}
        onClose={close}
        size={"60%"}
        title="Предпросмотр"
      ></Modal>
    </Container>
  );
};
