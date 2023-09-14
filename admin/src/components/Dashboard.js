import { todoList } from "constants";
import { orderList } from "constants";
import { boxInfo } from "constants";

function Dashboard() {
  return (
    <div>
      <div class="head-title">
        <div class="left">
          <h1>Dashboard</h1>
          <ul class="breadcrumb">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <i class="bx bx-chevron-right"></i>
            </li>
            <li>
              <a class="active" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
        <a href="#" class="btn-download">
          <i class="bx bxs-cloud-download"></i>
          <span class="text">Download PDF</span>
        </a>
      </div>

      <ul class="box-info">
        {boxInfo.map((item) => (
          <li>
            <i class={item.icon}></i>
            <span class="text">
              <h3>{item.total}</h3>
              <p>{item.label}</p>
            </span>
          </li>
        ))}
      </ul>

      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>Recent Orders</h3>
            <i class="bx bx-search"></i>
            <i class="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Date Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((order) => (
                <tr>
                  <td>
                    <img src={order.image} alt="people" />
                    <p>{order.name}</p>
                  </td>
                  <td>{order.date}</td>
                  <td>
                    <span class={`status ${order.css}`}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div class="todo">
          <div class="head">
            <h3>Todos</h3>
            <i class="bx bx-plus"></i>
            <i class="bx bx-filter"></i>
          </div>
          <ul class="todo-list">
            {todoList.map((todo) => (
              <li class={todo.css}>
                <p>{todo.label}</p>
                <i class={todo.icon}></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
