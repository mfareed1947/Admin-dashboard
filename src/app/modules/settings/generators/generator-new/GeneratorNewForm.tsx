import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { KTCardBody, KTCardHeader } from '../../../../../_metronic/helpers';
import clsx from 'clsx';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useQueryResponse } from '../core/QueryResponseProvider';
import { Generator } from '../core/_models';
import { Phase } from '../../phases/core/_models';
import { createGenerator } from '../core/_requests';
import { Brand } from '../../brands/core/_models';

type Props = {
  generator: Generator;
  phases: Array<Phase>;
  brands: Array<Brand>;
};

const generatorSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Generator Name is required'),
  uid: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Unique Identifier is required'),
  phaseId: Yup.string().required('Please select phase'),
});

const GeneratorNewForm: FC<Props> = ({ generator, phases, brands }) => {
  console.log('generator new form');
  const navigate = useNavigate();

  const { refetch } = useQueryResponse();

  const [generatorForNew] = useState<Generator>({
    name: generator.name,
    uid: generator.uid,
    phaseId: generator.phaseId,
    capacity: generator.capacity,
    capacityUOMId: generator.capacityUOMId,
    engineBrandId: generator.engineBrandId,
    alternativeEngineBrandId: generator.alternativeEngineBrandId,
  });

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch();
    }

    navigate(`/settings/generators`);
  };

  const formik = useFormik({
    initialValues: generatorForNew,
    validationSchema: generatorSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        await createGenerator(values);
      } catch (ex) {
        console.error(ex);
      } finally {
        setSubmitting(true);
        cancel(true);
      }
    },
  });

  return (
    <Form className='form' onSubmit={formik.handleSubmit} noValidate>
      <KTCardHeader>
        <h3 className='card-title'>Add Generator</h3>
        <div className='card-toolbar'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-secondary me-3'
            data-kt-generators-modal-action='back'
            disabled={formik.isSubmitting}
          >
            Back
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-generators-modal-action='submit'
            data-kt-indicator={formik.isSubmitting ? 'on' : 'off'}
            disabled={formik.isSubmitting}
          >
            <span className='indicator-label'>Submit</span>
            <span className='indicator-progress'>
              Please wait...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          </button>
        </div>
      </KTCardHeader>
      <KTCardBody className='py-4'>
        {/* begin::Input group */}
        <div className='row mb-7'>
          <div className='col-md-6'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Name</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              placeholder='Enter Generator Name'
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
          <div className='col-md-6'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Unique Identifier</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              {...formik.getFieldProps('uid')}
              type='text'
              name='uid'
              placeholder='Enter Unique Identifier'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                { 'is-invalid': formik.touched.uid && formik.errors.uid },
                {
                  'is-valid': formik.touched.uid && !formik.errors.uid,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting}
            />
            {formik.touched.uid && formik.errors.uid && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.uid}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
        </div>
        {/* end::Input group */}
        {/* begin::Input group */}
        <div className='row mb-7'>
          <div className='col-md-6'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Capacity</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              {...formik.getFieldProps('capacity')}
              type='text'
              name='capacity'
              placeholder='Enter Capacity'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                { 'is-invalid': formik.touched.capacity && formik.errors.capacity },
                {
                  'is-valid': formik.touched.capacity && !formik.errors.capacity,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting}
            />
            {formik.touched.capacity && formik.errors.capacity && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.capacity}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          <div className='col-md-6'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Phase</label>
            {/* end::Label */}

            {/* begin::Input */}
            <select
              className='form-select form-select-solid form-select-lg'
              {...formik.getFieldProps('phaseId')}
            >
              <option value=''>Select Phase</option>
              {phases.map((phase) => (
                <option key={phase.id} value={phase.id?.toString()}>
                  {phase.name}
                </option>
              ))}
            </select>

            {formik.touched.phaseId && formik.errors.phaseId && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.phaseId}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
        </div>
        {/* end::Input group */}
        {/* begin::Input group */}
        <div className='row mb-7'>
          <div className='col-md-6'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Engine Brand</label>
            {/* end::Label */}

            {/* begin::Input */}
            <select
              className='form-select form-select-solid form-select-lg'
              {...formik.getFieldProps('engineBrandId')}
            >
              <option value=''>Select Engine Brand</option>
              {brands.map((brands) => (
                <option key={brands.id} value={brands.id?.toString()}>
                  {brands.name}
                </option>
              ))}
            </select>
            {formik.touched.engineBrandId && formik.errors.engineBrandId && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.engineBrandId}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          <div className='col-md-6'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Alternative Engine Brand</label>
            {/* end::Label */}

            {/* begin::Input */}
            <select
              className='form-select form-select-solid form-select-lg'
              {...formik.getFieldProps('alternativeEngineBrandId')}
            >
              <option value=''>Select Alternative Engine Brand</option>
              {brands.map((brands) => (
                <option key={brands.id} value={brands.id?.toString()}>
                  {brands.name}
                </option>
              ))}
            </select>
            {formik.touched.alternativeEngineBrandId && formik.errors.alternativeEngineBrandId && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.alternativeEngineBrandId}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
        </div>
        {/* end::Input group */}
      </KTCardBody>
    </Form>
  );
};

export { GeneratorNewForm };
