import service from '@/utils/request';

/**
 * 分页获取当前登录用户的订单+套餐信息
 */
export async function PageSubscribeOrder(params) {    
    const res = await service.get('/note/subscribeorder/page',{params});
    if (res.code === 200) {
        return res.data.records;
    }
    return Promise.reject(new Error(res.message));
}