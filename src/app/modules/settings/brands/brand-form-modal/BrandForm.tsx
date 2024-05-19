import { FC, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import clsx from 'clsx';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useListView } from '../core/ListViewProvider';
import { useQueryResponse } from '../core/QueryResponseProvider';
import { Brand, BrandType } from '../core/_models';
import { isNotEmpty } from '../../../../../_metronic/helpers';
import { createBrand, updateBrand } from '../core/_requests';

type Props = {
  brand: Brand;
  types: Array<BrandType>;
};

const brandSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Brand Name is required'),
  brandTypeId: Yup.string().required('Please select type'),
  isActive: Yup.boolean().required(),
});

const BrandForm: FC<Props> = ({ brand, types }) => {
  console.log('brand form');

  const { setItemIdForUpdate } = useListView();
  const { refetch } = useQueryResponse();

  const [brandForEdit] = useState<Brand>({
    name: brand.name,
    brandTypeId: brand.type?.id?.toString(),
    isActive: brand.isActive,
  });

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch();
    }
    setItemIdForUpdate(undefined);
  };

  const formik = useFormik({
    initialValues: brandForEdit,
    validationSchema: brandSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        if (isNotEmpty(brand.id)) {
          await updateBrand(brand.id, values);
        } else {
          await createBrand(values);
        }
      } catch (ex) {
        console.error(ex);
      } finally {
        setSubmitting(true);
        cancel(true);
      }
    },
  });

  return (
    <>
      <Form className='form' onSubmit={formik.handleSubmit} noValidate>
        <Modal.Body>
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Name</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              placeholder='Enter Brand Name'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                { 'is-invalid': formik.touched.name && formik.errors.name },
                {
                  'is-valid': formik.touched.name && !formik.errors.name,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.name}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Brand Type</label>
            {/* end::Label */}

            {/* begin::Input */}
            <select
              className='form-select form-select-solid form-select-lg'
              {...formik.getFieldProps('brandTypeId')}
            >
              <option value=''>Select Type</option>
              {types.map((type) => {
                return (
                  <option key={type.id} value={type?.id?.toString()}>
                    {type.name}
                  </option>
                );
              })}
            </select>

            {formik.touched.brandTypeId && formik.errors.brandTypeId && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.brandTypeId}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row'>
            {/* begin::Label */}
            <label className='fw-bold fs-6 mb-2'>Active</label>
            {/* end::Label */}

            {/* begin::Input */}
            <div className='form-check form-switch form-check-custom form-check-solid'>
              <input
                {...formik.getFieldProps('isActive')}
                type='checkbox'
                className='form-check-input'
                checked={formik.values.isActive}
              />
            </div>
            {/* end::Input */}
          </div>
          {/* end::Input group */}
        </Modal.Body>
        <Modal.Footer>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-danger me-1'
            data-kt-brands-modal-action='cancel'
            disabled={formik.isSubmitting}
          >
            Cancel
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-brands-modal-action='submit'
            data-kt-indicator={formik.isSubmitting ? 'on' : 'off'}
            disabled={formik.isSubmitting}
          >
            <span className='indicator-label'>Submit</span>
            <span className='indicator-progress'>
              Please wait...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          </button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export { BrandForm };
