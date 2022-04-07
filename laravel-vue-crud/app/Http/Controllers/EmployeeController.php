<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\employee;

class EmployeeController extends Controller
{
    public function index() {
        $employees = employee::all()->toArray();
        return array_reverse($employees);
    }
    public function store(Request $request) {
        $employee = new employee(['name' => $request->input('name'), 'email' => $request->input('email'), 'phone' => $request->input('phone') ]);
        $employee->save();
        return response()->json('employee created!');
    }
    public function show($id) {
        $employee = employee::find($id);
        return response()->json($employee);
    }
    public function update($id, Request $request) {
        $employee = employee::find($id);
        $employee->update($request->all());
        return response()->json('employee updated!');
    }
    public function destroy($id) {
        $employee = employee::find($id);
        $employee->delete();
        return response()->json('employee deleted!');
    }
}
