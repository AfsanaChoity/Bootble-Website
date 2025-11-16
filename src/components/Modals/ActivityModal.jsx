'use client'
import React, { useState } from 'react';
import { Modal, Form, Input, DatePicker, Select, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '@/styles/AuthForm.css'
import '@/styles/Modal.css'

const { Option } = Select;

const ActivityModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: null,
    time: '',
    image: null
  });
  const [fileList, setFileList] = useState([]);
  const [errors, setErrors] = useState({});

  // Generate time options with 1 hour difference
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      const timeString = `${hour.toString().padStart(2, '0')}:00`;
      times.push(timeString);
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  const handleCancel = () => {
    setFormData({ name: '', date: null, time: '', image: null });
    setFileList([]);
    setErrors({});
    onClose();
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = 'Activity name must be at least 3 characters!';
    }
    
    if (!formData.date) {
      newErrors.date = 'Please select a date!';
    }
    
    if (!formData.time) {
      newErrors.time = 'Please select a time!';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOk = () => {
    if (validateForm()) {
      const values = { ...formData };
      
      // If there's an uploaded file, convert it to URL
      if (fileList.length > 0) {
        values.image = URL.createObjectURL(fileList[0].originFileObj);
      }
      
      onSubmit(values);
      message.success('Activity added successfully!');
      handleCancel();
    }
  };

  const uploadProps = {
    beforeUpload: (file) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('You can only upload image files!');
        return Upload.LIST_IGNORE;
      }
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        message.error('Image must be smaller than 5MB!');
        return Upload.LIST_IGNORE;
      }
      return false; // Prevent auto upload
    },
    fileList,
    onChange: ({ fileList: newFileList }) => {
      setFileList(newFileList);
    },
    maxCount: 1,
  };

  return (
    <Modal
      title={<span className="text-xl font-semibold">Add New Activity</span>}
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={600}
      okText="Add Activity"
      cancelText="Cancel"
      okButtonProps={{ 
        className: 'bg-blue-500 hover:bg-blue-600',
        size: 'large'
      }}
      cancelButtonProps={{ 
        size: 'large'
      }}
    >
      <div className="mt-6 space-y-5">
        {/* Name Field */}
        <div>
          <label className="block font-medium mb-2">
            Activity Name <span className="text-red-500">*</span>
          </label>
          <Input 
            placeholder="e.g., Morning Workout, Yoga Session" 
            size="large"
            className="rounded-lg"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              setErrors({ ...errors, name: '' });
            }}
            status={errors.name ? 'error' : ''}
          />
          {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
        </div>

        {/* Date Field */}
        <div>
          <label className="block font-medium mb-2">
            Date <span className="text-red-500">*</span>
          </label>
          <DatePicker 
            className="w-full rounded-lg"
            size="large"
            format="YYYY-MM-DD"
            placeholder="Select date"
            value={formData.date}
            onChange={(date) => {
              setFormData({ ...formData, date });
              setErrors({ ...errors, date: '' });
            }}
            status={errors.date ? 'error' : ''}
          />
          {errors.date && <div className="text-red-500 text-sm mt-1">{errors.date}</div>}
        </div>

        {/* Time Field with Select */}
        <div>
          <label className="block font-medium mb-2">
            Time <span className="text-red-500">*</span>
          </label>
          <Select
            placeholder="Select time"
            size="large"
            className="w-full"
            showSearch
            optionFilterProp="children"
            value={formData.time || undefined}
            onChange={(time) => {
              setFormData({ ...formData, time });
              setErrors({ ...errors, time: '' });
            }}
            status={errors.time ? 'error' : ''}
          >
            {timeOptions.map(time => (
              <Option key={time} value={time}>
                {time}
              </Option>
            ))}
          </Select>
          {errors.time && <div className="text-red-500 text-sm mt-1">{errors.time}</div>}
        </div>

        {/* Upload Image Field */}
        <div>
          <label className="block font-medium mb-2">
            Upload Image (Optional)
          </label>
          <Upload 
            {...uploadProps}
            listType="picture-card"
            className="avatar-uploader"
          >
            {fileList.length === 0 && (
              <div className="flex flex-col items-center justify-center p-2">
                <UploadOutlined className="text-2xl text-gray-400 mb-2" />
                <div className="text-sm text-gray-600">Upload Image</div>
              </div>
            )}
          </Upload>
          <p className="text-gray-500 text-xs mt-2">
            Maximum file size: 5MB. Supported formats: JPG, PNG, GIF
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ActivityModal;