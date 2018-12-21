import React from 'react';
import { connect } from 'dva';
import { Popconfirm, ZcyList, Select, DatePicker, Input, Spin, ZcyBreadcrumb } from 'doraemon';
import { routerRedux } from 'dva/router';
import PreorderCreateModal from './preorderModal';
import { PAGE_SIZE } from '../constants';
import '../index.less';

const { RangePicker } = DatePicker;

function Demands({ dispatch, list: dataSource, loading, visible, pageNo: current }) {
  function handleDelete(id) {
    console.warn(`TODO: ${id}`);
    dispatch({ type: 'demands/remove', payload: id });
  }

  function handleProcess(id) {
    dispatch(
      routerRedux.push({
        pathname: '/demands/process',
        search: `?${id}`,
      })
    );
  }
  function handleDetail(id) {
    dispatch(
      routerRedux.push({
        pathname: '/demands/detail',
        search: `?${id}`,
      })
    );
  }

  function onSearch(params) {
    dispatch({
      type: 'demands/fetch',
      payload: params,
    });
  }

  const columns = [
    {
      title: '需求申请单号',
      dataIndex: 'id',
      key: 'id',
      render: text => <a onClick={() => handleDetail(text)}>{text}</a>,
    },
    {
      title: '需求人',
      dataIndex: 'requirer',
      key: 'requirer',
    },
    {
      title: '需求单位',
      dataIndex: 'org',
      key: 'org',
    },
    {
      title: '需求单金额（元）',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '申请时间',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <span>
          <a onClick={() => handleProcess(record.id)}>处理需求</a>
          &nbsp;
          <a onClick={() => handleDetail(record.id)}>详情</a>
          &nbsp;
          <Popconfirm title="确定删除?" onConfirm={handleDelete.bind(null, record.id)}>
            <a href="">删除</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  const customItem = [
    {
      label: '申请时间',
      id: 'date',
      render: () => {
        return <RangePicker />;
      },
    },
    {
      label: '状态',
      id: 'status',
      render: () => {
        return (
          <Select>
            <Select.Option value="1">草稿</Select.Option>
            <Select.Option value="2">已撤销</Select.Option>
          </Select>
        );
      },
    },
    {
      label: '商品名称',
      id: 'name',
      render: () => {
        return <Input placeholder="请输入商品名称" />;
      },
    },
    {
      label: '需求单金额(元)',
      id: 'price',
      render: () => {
        return <Input placeholder="请输入需求单金额" />;
      },
    },
    {
      label: '需求单号',
      id: 'id',
      render: () => {
        return <Input placeholder="请输入(支持后6位搜索)" />;
      },
    },
  ];

  const breadcrumb = {
    routes: [
      {
        label: '首页',
        to: '/home',
      },
      {
        label: '需求单列表',
        to: '/demand?page=1',
      },
    ],
    globalBtn: [
      {
        label: '创建预购单',
        type: 'primary',
        onClick: () => {
          dispatch({ type: 'demands/toggle', payload: { visible: !visible } });
        },
      },
    ],
  };

  const combinTable = {
    columns,
    dataSource,
    rowKey: record => record.id,
    pagination: {
      current,
      pageSize: PAGE_SIZE,
    },
  };
  const tabList = [
    {
      label: '需求单列表',
      value: 'all',
      key: 'all',
      isAll: true,
    },
  ];

  return (
    <div className="demand">
      <ZcyBreadcrumb {...breadcrumb} />

      <Spin spinning={loading}>
        <ZcyList
          customItem={customItem}
          onSearch={onSearch}
          table={combinTable}
          tabs={{ tabList }}
          initSearchParams={{}}
        />
      </Spin>
      <PreorderCreateModal visible={visible} record={{}} onOk={values => console.log(values)} />
    </div>
  );
}
function mapStateToProps(state) {
  const { list, visible, pageNo } = state.demands;
  return {
    list,
    pageNo,
    visible,
    loading: state.loading.models.demands,
  };
}
export default connect(mapStateToProps)(Demands);
