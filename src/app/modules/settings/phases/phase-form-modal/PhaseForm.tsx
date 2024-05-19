import { FC, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import clsx from 'clsx';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useListView } from '../core/ListViewProvider';
import { useQueryResponse } from '../core/QueryResponseProvider';
import { Phase } from '../core/_models';
import { Neighbourhood } from '../../neighbourhoods/core/_models';
import { isNotEmpty } from '../../../../../_metronic/helpers';
import { createPhase, updatePhase } from '../core/_requests';

type Props = {
  phase: Phase;
  neighbourhoods: Array<Neighbourhood>;
};

const phaseSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Minimum 1 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Phase is required'),
  neighbourhoodId: Yup.string().required('Please select neighbourhood'),
  isActive: Yup.boolean().required(),
});

const PhaseForm: FC<Props> = ({ phase, neighbourhoods }) => {
  console.log('phase form');

  const { setItemIdForUpdate } = useListView();
  const { refetch } = useQueryResponse();

  const [phaseForEdit] = useState<Phase>({
    name: phase.name,
    neighbourhoodId: phase.neighbourhood?.id?.toString(),
    isActive: phase.isActive,
  });

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch();
    }
    setItemIdForUpdate(undefined);
  };

  const formik = useFormik({
    initialValues: phaseForEdit,
    validationSchema: phaseSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        if (isNotEmpty(phase.id)) {
          await updatePhase(phase.id, values);
        } else {
          await createPhase(values);
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
            <label className='required fw-bold fs-6 mb-2'>Phase</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              placeholder='Enter Phase Name'
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
            <label className='required fw-bold fs-6 mb-2'>Neighbourhood</label>
            {/* end::Label */}

            {/* begin::Input */}
            <select
              className='form-select form-select-solid form-select-lg'
              {...formik.getFieldProps('neighbourhoodId')}
            >
              <option value=''>Select Neighbourhood</option>
              {neighbourhoods.map((neighbourhood) => (
                <option key={neighbourhood.id} value={neighbourhood.id?.toString()}>
                  {neighbourhood.name}
                </option>
              ))}
            </select>

            {formik.touched.neighbourhoodId && formik.errors.neighbourhoodId && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.neighbourhoodId}</span>
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
            data-kt-phase-modal-action='cancel'
            disabled={formik.isSubmitting}
          >
            Cancel
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-phase-modal-action='submit'
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

export { PhaseForm };
