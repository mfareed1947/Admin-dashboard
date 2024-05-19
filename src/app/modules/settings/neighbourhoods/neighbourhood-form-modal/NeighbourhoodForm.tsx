import { FC, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import clsx from 'clsx';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useListView } from '../core/ListViewProvider';
import { useQueryResponse } from '../core/QueryResponseProvider';
import { Neighbourhood } from '../core/_models';
import { City } from '../../cities/core/_models';
import { isNotEmpty } from '../../../../../_metronic/helpers';
import { createNeighbourhood, updateNeighbourhood } from '../core/_requests';

type Props = {
  neighbourhood: Neighbourhood;
  cities: Array<City>;
};

const neighbourhoodSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Neighbourhood is required'),
  cityId: Yup.string().required('Please select city'),
  isActive: Yup.boolean().required(),
});

const NeighbourhoodForm: FC<Props> = ({ neighbourhood, cities }) => {
  console.log('neighbourhood form');

  const { setItemIdForUpdate } = useListView();
  const { refetch } = useQueryResponse();

  const [neighbourhoodForEdit] = useState<Neighbourhood>({
    name: neighbourhood.name,
    cityId: neighbourhood.city?.id?.toString(),
    isActive: neighbourhood.isActive,
  });

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch();
    }
    setItemIdForUpdate(undefined);
  };

  const formik = useFormik({
    initialValues: neighbourhoodForEdit,
    validationSchema: neighbourhoodSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        if (isNotEmpty(neighbourhood.id)) {
          await updateNeighbourhood(neighbourhood.id, values);
        } else {
          await createNeighbourhood(values);
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
              placeholder='Enter Neighbourhood Name'
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
            <label className='required fw-bold fs-6 mb-2'>City</label>
            {/* end::Label */}

            {/* begin::Input */}
            <select
              className='form-select form-select-solid form-select-lg'
              {...formik.getFieldProps('cityId')}
            >
              <option value=''>Select City</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id?.toString()}>
                  {city.name}
                </option>
              ))}
            </select>

            {formik.touched.cityId && formik.errors.cityId && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.cityId}</span>
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
            data-kt-neighbourhoods-modal-action='cancel'
            disabled={formik.isSubmitting}
          >
            Cancel
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-seighbourhood-modal-action='submit'
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

export { NeighbourhoodForm };
